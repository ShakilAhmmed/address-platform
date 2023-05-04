<?php

namespace App\Http\Controllers\API\V1\Auth;

use App\Enums\Authentication;
use App\Enums\Token;
use App\Http\Controllers\Controller;
use App\Http\Requests\V1\Auth\LogInFormRequest;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class AuthenticationController extends Controller
{
    /**
     * @param LogInFormRequest $request
     * @return JsonResponse
     */
    public function login(LogInFormRequest $request): JsonResponse
    {
        if (!auth()->attempt($request->fields())) {
            return $this->errorResponse('Invalid Credentials', Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        $token = auth()->user()->createToken('API Token')->accessToken;
        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return JsonResponse
     */
    public function me(): JsonResponse
    {
        return response()->json(auth()->user());
    }

    /**
     * Refresh a token.
     *
     * @return JsonResponse
     */
    public function refresh(): JsonResponse
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken(string $token): JsonResponse
    {
        return response()
            ->json([
                'code' => Response::HTTP_OK,
                'data' => auth()->user(),
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in_days' => Token::TOKEN_TTL_DAYS->value
            ])
            ->withCookie(cookie(name: Authentication::ACCESS_TOKEN->value, value: $token, minutes: Token::TOKEN_TTL_DAYS->value * Token::MINUTES_PER_DAY->value))
            ->withCookie(cookie(name: Authentication::REFRESH_TOKEN->value, value: $token, minutes: Token::REFRESH_TOKEN_TTL_DAYS->value * Token::MINUTES_PER_DAY->value));
    }

    public function logout()
    {
        auth()->user()->token()->revoke();
        return $this->successResponse([], 'logged out successfully');
    }
}

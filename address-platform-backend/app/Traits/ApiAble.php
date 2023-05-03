<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

trait ApiAble
{
    /**
     * Success response send function
     *
     * @param mixed $data Main data pass.
     * @param string|null $message Some message.
     * @param int $code Status code pass.
     * @return JsonResponse
     */
    protected function successResponse(mixed $data, string $message = null, int $code = Response::HTTP_OK): JsonResponse
    {
        return response()->json([
            'status' => 'Success',
            'message' => $message,
            'code' => $code,
            'data' => $data,
        ], $code);
    }

    /**
     * Error response send function
     *
     * @param string $message Some message.
     * @param int $code Status code pass.
     * @return JsonResponse
     */
    protected function errorResponse(string $message, int $code = Response::HTTP_INTERNAL_SERVER_ERROR): JsonResponse
    {
        return response()->json([
            'status' => 'Error',
            'message' => $message,
            'code' => $code,
            'data' => null,
        ], $code);
    }
}

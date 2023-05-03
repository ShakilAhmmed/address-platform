<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use App\Enums\Token;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        Passport::tokensExpireIn(now()->addDays(Token::TOKEN_TTL_DAYS->value));
        Passport::refreshTokensExpireIn(now()->addDays(Token::REFRESH_TOKEN_TTL_DAYS->value));
    }
}

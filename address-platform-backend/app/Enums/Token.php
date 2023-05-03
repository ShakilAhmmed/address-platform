<?php

namespace App\Enums;

enum Token: int
{
    case TOKEN_TTL_DAYS = 15;
    case REFRESH_TOKEN_TTL_DAYS = 30;
    case MINUTES_PER_DAY = 1440;
}

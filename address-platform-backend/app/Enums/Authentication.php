<?php

namespace App\Enums;

enum Authentication: string
{
    case ACCESS_TOKEN = 'ACCESS_TOKEN';
    case REFRESH_TOKEN = 'REFRESH_TOKEN';
}

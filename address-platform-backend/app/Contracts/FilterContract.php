<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

interface FilterContract
{
    public function filter(Builder $builder, Request $request): Builder;
}

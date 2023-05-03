<?php

namespace App\Traits;

use App\QueryBuilders\FilterQueryBuilder;

trait FilterAble
{
    public function newEloquentBuilder($query): FilterQueryBuilder
    {
        return new FilterQueryBuilder($query);
    }
}

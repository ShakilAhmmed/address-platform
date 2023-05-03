<?php

namespace App\QueryBuilders;

use App\Contracts\FilterContract;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class FilterQueryBuilder extends Builder
{
    public function filter(Request $request, FilterContract $filterContract): Builder
    {
        return $filterContract->filter($this, $request);
    }
}

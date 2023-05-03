<?php

namespace App\Filters;

use App\Contracts\FilterContract;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class AddressBookFilter implements FilterContract
{

    public function filter(Builder $builder, Request $request): Builder
    {
        $searchWithName = $request->query('name');
        $searchWithEmail = $request->query('email');
        $searchWithPhone = $request->query('phone');
        $searchWithNationality = $request->query('nationality');
        $searchWithGender = $request->query('nationality');

        return $builder
            ->when($searchWithName, function (Builder $query) use ($searchWithName) {
                return $query->where('name', 'LIKE', "%{$searchWithName}%");
            })
            ->when($searchWithEmail, function (Builder $query) use ($searchWithEmail) {
                return $query->where('email', $searchWithEmail);
            })
            ->when($searchWithPhone, function (Builder $query) use ($searchWithPhone) {
                return $query->where('email', $searchWithPhone);
            })
            ->when($searchWithNationality, function (Builder $query) use ($searchWithNationality) {
                return $query->where('nationality', 'LIKE', "%{$searchWithNationality}%");
            })
            ->when($searchWithGender, function (Builder $query) use ($searchWithGender) {
                return $query->where('gender', $searchWithGender);
            });
    }
}

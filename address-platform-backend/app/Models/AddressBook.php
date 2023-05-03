<?php

namespace App\Models;

use App\Traits\FilterAble;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AddressBook extends Model
{
    use HasFactory, FilterAble;

    protected $table = 'address_books';
    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'phone',
        'email',
        'website',
        'gender',
        'age',
        'nationality',
        'created_at',
        'created_by'
    ];

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by', 'id')->withDefault();
    }

}

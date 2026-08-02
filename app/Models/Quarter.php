<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Quarter extends Model
{
    protected $fillable = [
        'name',
        'sort_order',
    ];

    public function resources(): HasMany
    {
        return $this->hasMany(Resource::class);
    }
}

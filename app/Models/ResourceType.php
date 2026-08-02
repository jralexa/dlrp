<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ResourceType extends Model
{
    protected $fillable = [
        'name',
        'icon',
    ];

    public function resources(): HasMany
    {
        return $this->hasMany(Resource::class);
    }
}

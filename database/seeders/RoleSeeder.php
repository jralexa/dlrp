<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        collect([
            'Admin',
            'Teacher',
            'Resource Manager',
        ])->each(
            fn(string $name) => Role::firstOrCreate([
                'name' => $name,
            ])
        );
    }
}

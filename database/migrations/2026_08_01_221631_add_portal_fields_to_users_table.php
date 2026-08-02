<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('role_id')
                ->after('id')
                ->constrained()
                ->cascadeOnUpdate();

            $table->foreignId('school_id')
                ->nullable()
                ->after('role_id')
                ->constrained()
                ->nullOnDelete();

            $table->string('employee_id')
                ->nullable()
                ->after('school_id');

            $table->enum('status', [
                'pending',
                'approved',
                'rejected',
                'suspended',
            ])->default('pending')->after('password');

            $table->timestamp('last_login_at')
                ->nullable()
                ->after('status');

            $table->softDeletes();

            $table->index('role_id');
            $table->index('school_id');
            $table->index('status');
            $table->index('employee_id');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['role_id']);
            $table->dropForeign(['school_id']);

            $table->dropIndex(['role_id']);
            $table->dropIndex(['school_id']);
            $table->dropIndex(['status']);
            $table->dropIndex(['employee_id']);

            $table->dropColumn([
                'role_id',
                'school_id',
                'employee_id',
                'status',
                'last_login_at',
                'deleted_at',
            ]);
        });
    }
};

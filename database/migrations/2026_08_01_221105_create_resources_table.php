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
        Schema::create('resources', function (Blueprint $table) {
            $table->id();

            $table->foreignId('subject_id')->constrained()->cascadeOnUpdate();
            $table->foreignId('grade_level_id')->constrained()->cascadeOnUpdate();
            $table->foreignId('quarter_id')->constrained()->cascadeOnUpdate();
            $table->foreignId('resource_type_id')->constrained()->cascadeOnUpdate();
            $table->foreignId('uploaded_by')->constrained('users')->cascadeOnUpdate();

            $table->string('title');
            $table->string('slug')->unique();

            $table->longText('description')->nullable();

            $table->string('language')->default('English');
            $table->text('keywords')->nullable();

            $table->string('file_name');
            $table->string('file_path');
            $table->unsignedBigInteger('file_size');
            $table->string('mime_type');

            $table->string('thumbnail')->nullable();

            $table->unsignedBigInteger('downloads_count')->default(0);

            $table->enum('status', [
                'draft',
                'published',
                'archived',
            ])->default('draft');

            $table->timestamp('published_at')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->index(['subject_id', 'grade_level_id']);
            $table->index(['resource_type_id', 'quarter_id']);
            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('resources');
    }
};

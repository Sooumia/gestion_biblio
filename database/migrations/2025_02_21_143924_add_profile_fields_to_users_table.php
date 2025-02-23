<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'phone')) {
                $table->string('phone')->nullable();
            }
            if (!Schema::hasColumn('users', 'universite')) {
                $table->string('universite')->nullable();
            }
            if (!Schema::hasColumn('users', 'filiere')) {
                $table->string('filiere')->nullable();
            }
            if (!Schema::hasColumn('users', 'niveau')) {
                $table->string('niveau')->nullable();
            }
            if (!Schema::hasColumn('users', 'skills')) {
                $table->string('skills')->nullable();
            }
            if (!Schema::hasColumn('users', 'photo')) {
                $table->string('photo')->nullable();
            }
        });
    }
    


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['phone', 'universite', 'filiere', 'niveau', 'skills', 'photo']);
        });
    }
    
};

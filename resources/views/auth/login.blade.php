<link rel="stylesheet" href="{{ asset('css/login.css') }}">
<div class="form-image-container">
    <div class="form-container">
        <x-authentication-card>
            <x-slot name="logo">
            </x-slot>

            @if (session('status'))
                <div class="mb-4 font-medium text-sm text-green-600">
                    {{ session('status') }}
                </div>
            @endif

            <form method="POST" action="{{ route('login') }}" class="form">
                @csrf
                
                <div class="input-group">
                    <x-label for="email" :value="__('Email')" />
                    <x-input id="email" class="input" type="email" name="email" :value="old('email')" required autofocus />
                    <i class="icon-email"></i>
                </div>

                <div class="input-group">
                    <x-label for="password" :value="__('Mot de passe')" />
                    <x-input id="password" class="input" type="password" name="password" required />
                    <i class="icon-password"></i>
                </div>

                <div class="block mt-4">
                    <label for="remember_me" class="flex items-center">
                        <x-checkbox id="remember_me" name="remember" />
                        <span class="ml-2 text-sm text-gray-600">{{ __('Se souvenir de moi') }}</span>
                    </label>
                </div>

                <div class="flex items-center justify-between mt-4">
                    @if (Route::has('password.request'))
                        <a class="page-link" href="{{ route('password.request') }}">
                            <span class="page-link-label">{{ __('Mot de passe oublié ?') }}</span>
                        </a>
                    @endif

                    <button type="submit" class="form-btn">
                        {{ __('Connexion') }}
                    </button>
                </div>
            </form>

            <div class="buttons-container">
                <button class="google-login-button">
                    <i class="google-icon"></i> Connexion avec Google
                </button>
                <button class="apple-login-button">
                    <i class="apple-icon"></i> Connexion avec Apple
                </button>
            </div>

            <p class="sign-up-label">
                {{ __('Pas encore de compte ?') }} 
                <a href="{{ route('register') }}" class="sign-up-link">{{ __('Inscrivez-vous') }}</a>
            </p>
        </x-authentication-card>
    </div>
</div>

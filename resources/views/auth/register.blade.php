<link rel="stylesheet" href="{{ asset('css/Signup.css') }}">
<x-guest-layout>
    <div class="signup">
        <h1>Inscription</h1>
        <x-authentication-card>
            <x-slot name="logo">
                <x-authentication-card-logo />
            </x-slot>

            <x-validation-errors class="mb-6" />

            <form method="POST" action="{{ route('register') }}" class="signup-form">
                @csrf

                <div class="mb-4">
                    <x-label for="name" value="{{ __('Name') }}" />
                    <x-input id="name"
                             class="block mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                             type="text"
                             name="name"
                             :value="old('name')"
                             required autofocus
                             autocomplete="name" />
                </div>

                <div class="mb-4">
                    <x-label for="phone" value="{{ __('Phone') }}" />
                    <x-input id="phone"
                             class="block mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                             type="text"
                             name="phone"
                             :value="old('phone')"
                             required
                             autocomplete="phone" />
                </div>

                <div class="mb-4">
                    <x-label for="address" value="{{ __('Address') }}" />
                    <x-input id="address"
                             class="block mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                             type="text"
                             name="address"
                             :value="old('address')"
                             required
                             autocomplete="address" />
                </div>

                <div class="mb-4">
                    <x-label for="email" value="{{ __('Email') }}" />
                    <x-input id="email"
                             class="block mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                             type="email"
                             name="email"
                             :value="old('email')"
                             required
                             autocomplete="username" />
                </div>

                <div class="mb-4">
                    <x-label for="password" value="{{ __('Password') }}" />
                    <x-input id="password"
                             class="block mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                             type="password"
                             name="password"
                             required
                             autocomplete="new-password" />
                </div>

                <div class="mb-6">
                    <x-label for="password_confirmation" value="{{ __('Confirm Password') }}" />
                    <x-input id="password_confirmation"
                             class="block mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                             type="password"
                             name="password_confirmation"
                             required
                             autocomplete="new-password" />
                </div>

                @if (Laravel\Jetstream\Jetstream::hasTermsAndPrivacyPolicyFeature())
                    <div class="mb-6">
                        <x-label for="terms">
                            <div class="flex items-center">
                                <x-checkbox name="terms" id="terms" required />
                                <div class="ml-2 text-sm text-gray-600">
                                    {!! __('I agree to the :terms_of_service and :privacy_policy', [
                                        'terms_of_service' => '<a target="_blank" href="'.route('terms.show').'" class="underline text-indigo-600 hover:text-indigo-900">'.__('Terms of Service').'</a>',
                                        'privacy_policy' => '<a target="_blank" href="'.route('policy.show').'" class="underline text-indigo-600 hover:text-indigo-900">'.__('Privacy Policy').'</a>',
                                    ]) !!}
                                </div>
                            </div>
                        </x-label>
                    </div>
                @endif

                <div class="flex items-center justify-between">
                    <a class="text-sm text-indigo-600 hover:text-indigo-900" href="{{ route('login') }}">
                        {{ __('Already registered?') }}
                    </a>

                    <x-button class="ml-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500">
                        {{ __('Register') }}
                    </x-button>
                </div>
            </form>
        </x-authentication-card>
    </div>
</x-guest-layout>

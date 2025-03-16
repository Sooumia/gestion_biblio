<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        background: url('css/book.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .container {
        width: 80%;
        background: rgba(0, 0, 0, 0.5);
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        text-align: center;
        margin: auto;
    }

    h2 {
        color: #0072ff;
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
    }

    .form-group {
        text-align: left;
        margin-bottom: 20px;
    }

    .form-group label {
        font-weight: 500;
        display: block;
        margin-bottom: 8px;
        color: white;
    }

    .form-group input {
        width: 100%;
        padding: 12px;
        border: 2px solid #ddd;
        border-radius: 6px;
        font-size: 14px;
        transition: border-color 0.3s ease-in-out;
    }

    .form-group input:focus {
        border-color: #0072ff;
        outline: none;
        box-shadow: 0 0 6px rgba(0, 114, 255, 0.5);
    }

    .btn {
        width: 100%;
        padding: 14px;
        background: #0072ff;
        color: white;
        font-size: 16px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.3s ease-in-out;
        font-weight: 600;
    }

    .btn:hover {
        background: #0056b3;
    }

    .login-link {
        margin-top: 15px;
        display: block;
        font-size: 14px;
        color: #0072ff;
        text-decoration: none;
        font-weight: 500;
    }

    .login-link:hover {
        text-decoration: underline;
    }
</style>
    

<x-guest-layout>
    <div class="container">
        <x-validation-errors class="mb-6" />
        <form method="POST" action="{{ route('register') }}" class="signup-form">
            @csrf
            <div class="mb-4">
                <x-label for="name" value="{{ __('Name') }}" class="text-white" />
                <x-input id="name"
                         class="block mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                         type="text"
                         name="name"
                         :value="old('name')"
                         required autofocus
                         autocomplete="name" />
            </div>
            <div class="mb-4">
                <x-label for="phone" value="{{ __('Phone') }}" class="text-white" />
                <x-input id="phone"
                         class="block mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                         type="text"
                         name="phone"
                         :value="old('phone')"
                         required
                         autocomplete="phone" />
            </div>
            <div class="mb-4">
                <x-label for="address" value="{{ __('Address') }}" class="text-white" />
                <x-input id="address"
                         class="block mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                         type="text"
                         name="address"
                         :value="old('address')"
                         required
                         autocomplete="address" />
            </div>
            <div class="mb-4">
                <x-label for="email" value="{{ __('Email') }}" class="text-white" />
                <x-input id="email"
                         class="block mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                         type="email"
                         name="email"
                         :value="old('email')"
                         required
                         autocomplete="username" />
            </div>
            <div class="mb-4">
                <x-label for="password" value="{{ __('Password') }}" class="text-white" />
                <x-input id="password"
                         class="block mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                         type="password"
                         name="password"
                         required
                         autocomplete="new-password" />
            </div>
            <div class="mb-6">
                <x-label for="password_confirmation" value="{{ __('Confirm Password') }}" class="text-white" />
                <x-input id="password_confirmation"
                         class="block mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                         type="password"
                         name="password_confirmation"
                         required
                         autocomplete="new-password" />
            </div>
            @if (Laravel\Jetstream\Jetstream::hasTermsAndPrivacyPolicyFeature())
                <div class="mb-6">
                    <x-label for="terms" class="text-white">
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
                <a class="" href="{{ route('login') }}">
                    {{ __('Already registered?') }}
                </a>
                <x-button class="btn">
                    {{ __('Register') }}
                </x-button>
            </div>
        </form>
    </div>
</x-guest-layout>

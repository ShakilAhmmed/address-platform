<?php

namespace App\Http\Requests\V1\AddressBook;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AddressBookFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'max:50'],
            'phone' => ['required', 'max:50'],
            'email' => [
                'required',
                'email',
                'max:100',
                Rule::unique('address_books')->ignore($this->route('addressBook'))
            ],
            'website' => ['required', 'url', 'max:100'],
            'gender' => ['required', 'in:male,female,other'],
            'age' => ['required', 'integer'],
            'nationality' => ['required', 'max:50']
        ];
    }

    public function fields(): array
    {
        return [
            'name' => $this->input('name'),
            'phone' => $this->input('phone'),
            'email' => $this->input('email'),
            'website' => $this->input('website'),
            'gender' => $this->input('gender'),
            'age' => $this->input('age'),
            'nationality' => $this->input('nationality'),
            'created_by' => auth()->user()->id,
        ];
    }
}

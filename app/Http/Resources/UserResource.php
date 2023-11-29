<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'created_at' => $this->created_at,
            // 'follows' => $this->follows->pluck('id'),
            'can' => [
                'edit' => Auth::user()->can('edit', $this->resource)
            ],
            'links' => [
                'profile_path' => url('/profiles/'.$this->id)
            ]
            // 'foo' => $this->when(true,'bar')
            // $this->mergeWhen(Auth::user()->is($this->resource),[
            //     'email' => $this->email
            // ])
        ];
    }
}

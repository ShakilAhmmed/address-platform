<?php

namespace App\Http\Controllers\API\V1;

use App\Filters\AddressBookFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\V1\AddressBook\AddressBookFormRequest;
use App\Http\Resources\AddressBookResource;
use App\Models\AddressBook;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AddressBookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $addressBooks = AddressBook::query()
                ->filter($request, new AddressBookFilter())
                ->paginate();
            return $this->successResponse(
                new AddressBookResource($addressBooks),
                'Address books fetched successfully',
            );
        } catch (Exception $exception) {
            logger()->critical('address-books:fetching ->' . $exception->getMessage());
            return $this->errorResponse('Address books fetching failed');
        }
    }

    /**
     * @param AddressBookFormRequest $request
     * @param AddressBook $addressBook
     * @return JsonResponse
     */
    public function store(AddressBookFormRequest $request, AddressBook $addressBook): JsonResponse
    {
        try {
            $addressBook->fill($request->fields())->save();
            return $this->successResponse(
                new AddressBookResource($addressBook->load('createdBy:id,name')),
                'Address book created successfully',
                Response::HTTP_CREATED);
        } catch (Exception $exception) {
            logger()->critical('address-book:creation ->' . $exception->getMessage());
            return $this->errorResponse('Address book creation failed');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AddressBook $addressBook)
    {
        try {
            return $this->successResponse(
                new AddressBookResource($addressBook->load('createdBy:id,name')),
                'Address book fetched successfully',
                Response::HTTP_OK);
        } catch (Exception $exception) {
            logger()->critical('address-book:fetching ->' . $exception->getMessage());
            return $this->errorResponse('Address book fetching failed');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AddressBookFormRequest $request, AddressBook $addressBook)
    {
        try {
            $addressBook->fill($request->fields())->save();
            return $this->successResponse(
                new AddressBookResource($addressBook->load('createdBy:id,name')),
                'Address book updated successfully',
                Response::HTTP_CREATED);
        } catch (Exception $exception) {
            logger()->critical('address-book:updating ->' . $exception->getMessage());
            return $this->errorResponse('Address book updating failed');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AddressBook $addressBook)
    {
        try {
            $addressBook->delete();
            return $this->successResponse([], 'Address book deleted successfully', Response::HTTP_OK);
        } catch (Exception $exception) {
            logger()->critical('address-book:deleting ->' . $exception->getMessage());
            return $this->errorResponse('Address book deleting failed');
        }
    }
}

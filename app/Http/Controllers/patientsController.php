<?php

namespace App\Http\Controllers;

use App\Models\patient;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;

class patientsController extends Controller
{

    // Get All Resource 

    public function index()
    {
        $patient = patient::all();

        if ($patient->isNotEmpty()) {

            $data = [
                'message' => 'Get All Resource',
                'data' => $patient
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Data is empty',
            ];

            return response()->json($data, 200);
        }
    }



    // Add Resource  

    public function store(Request $request)
    {
        $validateData = $request->validate([
            'name' => 'required',
            'phone' => 'required|numeric',
            'address' => 'required',
            'status' => ['required', Rule::in(['Positive', 'Dead', 'Recovered'])],
            'in_date_at' => 'required|date',
            'out_date_at' => 'date'
        ]);

        $patient = patient::create($validateData);

        if ($patient) {

            $data = [
                'message' => 'Resource is update successfully',
                'data' => $patient
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }
    }



    // Get Detail Resource

    public function show($id)
    {
        $patient = patient::find($id);

        if ($patient) {
            $data = [
                'message' => 'Get Detail Resource',
                'data' => $patient
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Data Not Found'
            ];

            return response()->json($data, 404);
        }
    }



    // Edit Resource

    public function update(Request $request, $id)
    {
        $patient = patient::find($id);

        if ($patient) {

            $patient->update($request->all());

            $data = [
                'message' => 'Resource is update successfully',
                'data' => $patient
            ];

            return response()->json($data, 200);
        } else {

            $data = [
                'message' => 'Resource not found'
            ];

            return response()->json($data, 404);
        }
    }



    // Delete Resource

    public function destroy($id)
    {
        $patient = patient::find($id);

        if ($patient) {
            $patient->delete();

            $data = [
                'message' => 'Resource is delete successfully'
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource not found'
            ];

            return response()->json($data, 404);
        }
    }



    // Search Resource By Name 

    public function search($name)
    {
        $patient = patient::where('name', 'LIKE', '%' . $name . '%')->get();

        if ($patient->isNotEmpty()) {

            $data = [
                "message" => "Get Searched Resource",
                "data" => $patient
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                "message" => "Resource not found",
            ];

            return response()->json($data, 404);
        }
    }



    // Get Positive Resource

    public function positive()
    {
        $patient = patient::where('status', 'positive')->get();


        if ($patient->isNotEmpty()) {
            $data = [
                "message" => "Get positive resource",
                "total" => $patient->count(),
                "data" => $patient
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                "message" => "Resource not found",
            ];

            return response()->json($data, 404);
        }
    }



    // Get Recovered Resource

    public function recovered()
    {
        $patient = patient::where('status', 'recovered')->get();


        if ($patient->isNotEmpty()) {
            $data = [
                "message" => "Get recovered resource",
                "total" => $patient->count(),
                "data" => $patient
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                "message" => "Resource not found",
            ];

            return response()->json($data, 404);
        }
    }



    // Get dead Resource

    public function dead()
    {
        $patient = patient::where('status', 'dead')->get();

        if ($patient->isNotEmpty()) {
            $data = [
                "message" => "Get dead resource",
                "total" => $patient->count(),
                "data" => $patient
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                "message" => "Resource not found",
            ];

            return response()->json($data, 404);
        }
    }
}

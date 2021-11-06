<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Students;

class StudentController extends Controller
{
    public function index()
    {
        $student = Students::all();

        $data = [
            'message' => 'Get All Student',
            'data' => $student
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $input = [
            'nama' =>  $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Students::create($input);

        $data = [
            'message' => 'Data Berhasil Ditambahkan',
            'data' => $student
        ];

        return response()->json($data, 200);
    }

    public function show($id)
    {
        $student = Students::find($id);

        if ($student) {
            $data = [
                'message' => 'Get Detail Student',
                'data' => $student
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Data Not Found'
            ];

            return response()->json($data, 404);
        }
    }

    public function update(Request $request, $id)
    {
        $student = Students::find($id);

        if ($student) {

            $input = [
                'nama' =>  $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan
            ];

            $student->update($input);

            $data = [
                'message' => 'Data is Updated',
                'data' => $student
            ];

            return response()->json($data, 200);
        } else {

            $data = [
                'message' => 'Data not Found'
            ];

            return response()->json($data, 404);
        }
    }

    public function destroy($id)
    {
        $student = Students::find($id);

        if ($student) {
            $student->delete();

            $data = [
                'message' => 'Data is Deleted'
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Data not Found'
            ];

            return response()->json($data, 404);
        }
    }
}

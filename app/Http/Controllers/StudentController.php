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
}

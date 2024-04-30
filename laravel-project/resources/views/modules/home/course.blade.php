@extends('templates.layout')

@section('content')

<div class="card mt-3">  <div class="card-header">
    <h5 class="card-title">Course Information</h5>
  </div>
  <div class="card-body">
    <table class="table table-bordered">  <thead>
        <tr>
          <th scope="col">Course</th>
          <th scope="col">Type</th>
          <th scope="col">Rate</th>
        </tr>
      </thead>
      <tbody>
        @foreach ($data as $index => $value)
        <tr>
          <td>{{ $value['course'] }}</td>  <td>{{$value['type']}}</td>
          <td>
            @for ($i = 0; $i < 5 ; $i++)
            <span class="me-1 text-warning">
              <i class="bi bi-star-{{$i < $value['rate']?"fill":""}}"></i>
            </span>
            @endfor
          </td>
        </tr>
        @endforeach
      </tbody>
    </table>
  </div>
</div>
@endsection

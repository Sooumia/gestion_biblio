<!DOCTYPE html>
<html>
  <head>
    <title>admin</title>
    @include('admin.css')
  </head>
  <body>
    <!-- Header-->
     @include('admin.header')
    <div class="d-flex align-items-stretch">
      <!-- Sidebar Navigation-->
      @include ('admin.sidebar')
     <!-- Sidebar Navigation end-->
      @include('admin.body')
        <!-- Page Footer-->
      @include('admin.footer')
    </div>
    
  </body>
</html>
<!DOCTYPE html>
<html>
  <head>
    <title>admin</title>
    @include('admin.css')
  </head>
  <body>
    <!-- Header-->
    <!-- Sidebar Navigation-->
    @include ('admin.sidebar')
    @include('admin.header')
     <!-- Sidebar Navigation end-->
      @include('admin.body')
        <!-- Page Footer-->
      @include('admin.footer')

    
  </body>
</html>
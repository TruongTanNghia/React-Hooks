# REACT-HOOKS
## useState
### Exercise: Component Đếm với useState
#### Hướng Dẫn:
 - Khởi tạo State: Tạo một biến trạng thái count và khởi tạo nó là 0 sử dụng useState.
  
 - Nút Tăng: Triển khai một hàm increaseCount để tăng giá trị count khi nút "Tăng" được click. Sử dụng dạng hàm của setCount để đảm bảo sử dụng giá trị trạng thái mới nhất.
  
 - Nút Giảm: Triển khai một hàm decreaseCount để giảm giá trị count khi nút "Giảm" được click. Đảm bảo rằng giá trị không được giảm dưới 0.
  
 - Hiển Thị Số Đếm: Hiển thị giá trị hiện tại của đếm trong một phần tử h1 . Canh giữ phần tử này cả theo chiều ngang và chiều dọc.
  
 - Styling Nút: Tạo một phong cách cho nút "Tăng" và "Giảm" với màu nền, padding và margin. Đảm bảo rằng nút được canh giữ giữa theo chiều ngang.
#### Hình Ảnh Minh Hoạ
![image](https://github.com/TruongTanNghia/React-Hooks/assets/92427686/5af5fad4-3670-4c85-a43d-ff439cff4baa)

## useEffect
### Exercise: Hiển Thị Danh Sách Người Dùng
#### Hướng Dẫn:
Khởi tạo State: Sử dụng useState để khởi tạo biến trạng thái users là một mảng rỗng và isLoading là true.

Fetch Dữ Liệu: Sử dụng useEffect để fetch dữ liệu từ https://jsonplaceholder.typicode.com/users khi component được render lần đầu tiên. Khi dữ liệu được fetch thành công, cập nhật trạng thái users và đặt isLoading về false.

Hiển Thị Loading Message: Nếu đang loading (isLoading là true), hiển thị một thông báo "Loading..." trong phần tử <p>.

Hiển Thị Danh Sách Người Dùng: Nếu không đang loading, hiển thị danh sách người dùng trong một phần tử <ul>. Mỗi người dùng được hiển thị trong một phần tử <li> với key là user.id và nội dung là user.name.

Style: Canh giữ phần tử chứa danh sách người dùng theo chiều ngang và chiều dọc.
#### Hình Ảnh Minh Hoạ
![image](https://github.com/TruongTanNghia/React-Hooks/assets/92427686/64421a03-32eb-487a-9cc9-6c3025fc950e)

## useRef
### Exercise: Điều Kích Thước Input
#### Hướng Dẫn:
Tạo Ref cho Input: Sử dụng useRef để tạo một ref có tên là sizeRef và áp dụng nó cho phần tử input.

Thay Đổi Kích Thước: Implement một hàm handleSize để thay đổi kích thước của input khi nút "UP SIZE" được click. Khi click nút này, đặt chiều rộng (width) và chiều cao (height) của input lên 550px.

Đặt Kích Thước Ban Đầu: Implement một hàm handleClearSize để đặt lại kích thước ban đầu của input khi nút "Clear" được click. Khi click nút này, đặt chiều rộng và chiều cao của input về 240px và 100px.

Styling Input: Cho input một style mặc định với chiều rộng là 240px và chiều cao là 100px.

Nâng Cao (Tùy Chọn): Thử nghiệm thêm tính năng khác, ví dụ: thay đổi màu sắc, font chữ, hoặc các thuộc tính khác của input bằng cách sử dụng useRef.
#### Hình Ảnh Minh Hoạ
##### Trước: 
![image](https://github.com/TruongTanNghia/React-Hooks/assets/92427686/24ca02fe-0407-4a23-b4ae-07c6cda300cb)

##### Sau:
![image](https://github.com/TruongTanNghia/React-Hooks/assets/92427686/9ec87a61-ebb3-4b44-a001-cc5c7bcee4dc)

## useCallback
### Exercise: 
## useContext
### Exercise: 
## useReducer

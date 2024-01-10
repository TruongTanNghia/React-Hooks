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
- Khởi tạo State: Sử dụng useState để khởi tạo biến trạng thái users là một mảng rỗng và isLoading là true.

- Fetch Dữ Liệu: Sử dụng useEffect để fetch dữ liệu từ https://jsonplaceholder.typicode.com/users khi component được render lần đầu tiên. Khi dữ liệu được fetch thành công, cập nhật trạng thái users và đặt isLoading về false.

- Hiển Thị Loading Message: Nếu đang loading (isLoading là true), hiển thị một thông báo "Loading..." trong phần tử p.

- Hiển Thị Danh Sách Người Dùng: Nếu không đang loading, hiển thị danh sách người dùng trong một phần tử ul. Mỗi người dùng được hiển thị trong một phần tử li với key là user.id và nội dung là user.name.

- Style: Canh giữ phần tử chứa danh sách người dùng theo chiều ngang và chiều dọc.
#### Hình Ảnh Minh Hoạ
![image](https://github.com/TruongTanNghia/React-Hooks/assets/92427686/64421a03-32eb-487a-9cc9-6c3025fc950e)

## useRef
### Exercise: Điều Kích Thước Input
#### Hướng Dẫn:
- Tạo Ref cho Input: Sử dụng useRef để tạo một ref có tên là sizeRef và áp dụng nó cho phần tử input.

- Thay Đổi Kích Thước: Implement một hàm handleSize để thay đổi kích thước của input khi nút "UP SIZE" được click. Khi click nút này, đặt chiều rộng (width) và chiều cao (height) của input lên 550px.

- Đặt Kích Thước Ban Đầu: Implement một hàm handleClearSize để đặt lại kích thước ban đầu của input khi nút "Clear" được click. Khi click nút này, đặt chiều rộng và chiều cao của input về 240px và 100px.

- Styling Input: Cho input một style mặc định với chiều rộng là 240px và chiều cao là 100px.

- Nâng Cao (Tùy Chọn): Thử nghiệm thêm tính năng khác, ví dụ: thay đổi màu sắc, font chữ, hoặc các thuộc tính khác của input bằng cách sử dụng useRef.
#### Hình Ảnh Minh Hoạ
##### Trước: 
![image](https://github.com/TruongTanNghia/React-Hooks/assets/92427686/24ca02fe-0407-4a23-b4ae-07c6cda300cb)

##### Sau:
![image](https://github.com/TruongTanNghia/React-Hooks/assets/92427686/9ec87a61-ebb3-4b44-a001-cc5c7bcee4dc)

## useCallback
### Exercise: Bạn có hai files component: Content.js và LearnUseCallback.js. Nhiệm vụ của bạn là tối ưu hóa re-render trong ứng dụng React bằng cách sử dụng React.memo và React.useCallback.
#### Hướng Dẫn:
- Sử dụng React.memo để tối ưu hóa component Content trong Content.js.
- Sử dụng React.useCallback để tối ưu hóa hàm handleIncrement trong LearnUseCallback.js.
Hiển Thị Số Lần Render:
- Sử dụng console.log để hiển thị số lần re-render của Content component và LearnUseCallback component.
Kết Quả Mong Đợi:
- Khi bạn click vào nút "Click Me !!!", chỉ có Content component bị re-render, và LearnUseCallback component không re-render.
#### Hình Ảnh Minh Hoạ
![image](https://github.com/TruongTanNghia/React-Hooks/assets/92427686/42013c72-d544-4221-bd71-77342c128737)

## useContext
### Exercise: useContext trong React
#### Hưỡng Dẫn
Tạo Context và Provider:
Trong store.js:
- Tạo một AuthContext bằng createContext().
- Xây dựng một AuthProvider component sử dụng AuthContext.Provider. AuthProvider này sẽ chứa trạng thái user và các hàm login và logout.
- Tạo Custom Hook useAuth:

Trong useAuth.js:
- Import useContext từ react.
- Import AuthContext từ store.js.
- Tạo một custom hook có tên là useAuth sử dụng useContext để lấy giá trị từ AuthContext.
- Sử Dụng useContext và useAuth:

Trong exercise.js:
- Import AuthContext và useAuth.
- Sử dụng hook useAuth để lấy giá trị user, login, và logout.
Hiển Thị Thông Tin Người Dùng:
Trong exercise.js:
- Hiển thị thông tin người dùng nếu có (user tồn tại).
- Hiển thị thông báo yêu cầu đăng nhập và nút đăng nhập nếu user không tồn tại.
Thực Hiện Đăng Nhập và Đăng Xuất:

Trong exercise.js:
- Sử dụng hàm login để đăng nhập người dùng khi nút "Login" được click.
- Sử dụng hàm logout để đăng xuất người dùng khi nút "Logout" được click.
Style và Trình Bày:
- Tuỳ chỉnh giao diện và kiểu dáng theo sở thích cá nhân của bạn để đảm bảo giao diện người dùng thân thiện và dễ đọc.
#### Hình Ảnh Minha Hoạ
##### Trước:
![image](https://github.com/TruongTanNghia/React-Hooks/assets/92427686/e4ef5f1a-8ef1-4805-8570-343b0211312b)
##### Sau: 
![image](https://github.com/TruongTanNghia/React-Hooks/assets/92427686/93188958-2d86-48fa-8faf-38db8bc4e165)

## useReducer
### Exercise: React useReducer - Todo List
#### Hướng Dẫn
Tạo Context và Reducer:

Trong store.js:
- Tạo một TodoContext bằng createContext().
- Xây dựng reducer cho todo list. Reducer này sẽ xử lý các action như ADD_TODO và DELETE_TODO.
Tạo Action Types:

Trong type.js:
- Định nghĩa các action types như ADD_TODO và DELETE_TODO.
Action Creators và Reducer:

Trong action.js:

- Viết hàm addTodoAction để thêm todo mới.
- Viết hàm deleteTodoAction để xoá todo dựa trên id.
Trong reducer.js:

- Xây dựng reducer với các action types tương ứng để thực hiện thêm và xoá todo.
Sử Dụng useReducer và useState:

Trong exercise1/index.js:
- Import useReducer và useState từ React.
- Import reducer, initState và action creators.
- Tạo state local cho input (todo) và danh sách todos (state).
- Sử dụng useReducer để quản lý state toàn cục với reducer.
Xử Lý Thêm và Xoá Todo:

Trong exercise1/index.js:
- Viết hàm handleChange để cập nhật giá trị của input khi người dùng nhập liệu.
- Viết hàm handleAddTodo để thêm todo mới khi người dùng nhấn nút "Add".
- Viết hàm handleDelete để xoá todo khi người dùng nhấn nút "X".
Hiển Thị Danh Sách Todo:

Trong exercise1/index.js:
- Hiển thị danh sách todo với mỗi todo kèm theo nút "X" để xoá.
#### Hình Ảnh Minh Hoạ
![image](https://github.com/TruongTanNghia/React-Hooks/assets/92427686/bd9bae0a-6dda-4b0e-a318-cfaa9a417832)

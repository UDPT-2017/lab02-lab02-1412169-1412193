# BT-UDPT-2 - *Sent Email*

**Sent Email** là một bài tập 2 tại môn UDPT. Ứng dụng cho phép người dùng gửi tin nhắn (email) cho người dùng khác.

Thành viên:
* [x] **1412193** Nguyễn Thái Học (NguyenThaiHoc1)
* [x] **1412169** Hồ Thảo Hiền (HoThaoHien)

URL: **https://mywebemail.herokuapp.com**

## Yêu cầu

Sinh viên check vào các mục bên dưới và ghi mã sinh viên đã làm vào chức năng theo mẫu. Mục nào ko có MSSV là tính điểm theo nhóm. Cần sắp xếp các chức năng bên dưới theo thứ tự MSSV đã thực hiện.

Yêu cầu **GIT**
* [x] Có sử dụng GIT.
* [x] Sử dụng GIT theo Centralized Workflow.
* [x] Sử dụng GIT theo Feature Branch Workflow.
* [x] Sử dụng GIT theo Gitflow Workflow.

Yêu cầu **bắt buộc**
* [x] Website layout theo kiến trúc MVC với các thành phần được tách thành nhiều module theo hướng dẫn. (**1412193**)
* [x] Trang web được thiết kế sẽ bao gồm các trang: home, messages, users, about. (**1412193**)
* [x] Cho phép người dùng biết họ đang ở trang nào (sử dụng breadcrumb, highlight navigation bar,...). (**1412193**)
* [x] Cho phép người dùng đăng ký tài khoản bằng các thông tin: email, password, name, phone.(**1412193**)
* [x] Đăng nhập bằng email và password.(**1412193**)
* [x] Sau khi đăng nhập, người dùng sẽ được chuyển đến trang liệt kê danh sách các tin nhắn đã nhận, sắp xếp theo thứ tự thời gian, một nút để tạo tin nhắn mới, nút để xem danh sách bạn bè và nút để xem các tin nhắn đã gửi.(**1412169**)
* [x] Tin nhắn chưa đọc phải được làm nổi bật hơn các tin nhắn khác, có ghi nhận thời gian đã cách đây bao lâu.(**1412169**)
* [x] Trang users cho phép xem danh sách người dùng có trong hệ thống và phải có nút "add" với những người dùng chưa là bạn để thêm vào danh sách bạn bè.(**1412193**)
* [x] Trang about thể hiện thông tin nhóm thực hiện đề tài.(**1412193**)
* [x] Nhấn nút "new message" sẽ chuyển sang giao diện cho phép người dùng gửi tin nhắn cho người dùng trong danh sách bạn bè. Người gửi phải nằm trong danh sách bạn bè và cho phép người dùng chọn qua combobox.(**1412193**)
* [x] Nhấn "sent" sẽ chuyển sang giao diện hiển thị danh sách tin nhắn đã gửi. Mỗi tin nhắn cần hiện thời gian người nhận đã đọc.(**1412913**)
* [x] Nhấn "refresh" để cập nhật danh sách tin nhắn mới nhất (ko nạp lại dữ liệu trên trang).(**1412169**)
* [x] Cho phép người dùng layout tin nhắn bằng markdown. (**1412193**)

Yêu cầu **không bắt buộc**:
* [x] Chuyển nút "add" thành nút "remove" sau khi thêm bạn thành công.(**1412193**)
* [x] Tự động refresh lại danh sách tin nhắn đã nhận sau 1 khoảng thời gian nhất định và có hiển thị đã refresh danh sách tin nhắn cách đây bao lâu.(**1412169**)
* [ ] Cuối danh sách tin nhắn sẽ có "load more" để nạp thêm 10 tin nhắn tiếp theo.(**MSSV**)
* [ ] Khi người dùng kéo đến cuối danh sách sẽ tự động nạp thêm 10 tin nhắn tiếp theo.(**MSSV**)
* [ ] Cho phép gửi email nội dung tin nhắn cho người dùng không nằm trong hệ thống.(**MSSV**)
* [ ] Cho phép người dùng đăng nhập bằng tài khoản facebook và lấy ảnh đại diện, email từ facebook. (**MSSV**)
* [ ] Cho phép gửi tin nhắn đến người dùng facebook.(**MSSV**)
* [ ] Nạp danh sách bạn bè từ facebook khi người dùng đăng nhập bằng facebook.(**MSSV**)
* [ ] Quản lý các thay đổi trong cơ sở dữ liệu (sử dụng [db-migrate](https://www.npmjs.com/package/db-migrate))(**MSSV**)

Liệt kê các **yêu cầu nâng cao** đã thực hiện:
* [x] Lọc  Friend (Search friends trên thanh đó có hiệu ứng)
* [ ] Chức năng 2

## Demo
https://www.youtube.com/watch?v=fVIU0Bg66AI&feature=youtu.be




## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

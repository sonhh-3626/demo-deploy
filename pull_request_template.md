## Checklist tự review pull trước khi ready để trainer review

##  Code sạch & đúng format
- [ ] Code sạch, dễ đọc, tuân theo convention của team
- [ ] Đã chạy ESLint, Prettier, Stylelint (nếu có)
- [ ] Không còn `console.log`, comment debug hoặc đoạn code tạm
- [ ] Không còn biến, hàm, hoặc import không dùng đến
- [ ] Logic rõ ràng, xử lý đầy đủ, không dư thừa
- [ ] Logic đúng với yêu cầu chức năng
- [ ] Đã kiểm tra và xử lý các trường hợp `null`, `undefined`, và `error`
- [ ] Nếu dùng `async/await`, đã bọc trong `try/catch`
- [ ] Không để promise treo (`unhandled promise`) hoặc lỗi silent

## Component & Code Structure
- [ ] Chia component hợp lý, rõ ràng theo tính năng
- [ ] Component lớn/phức tạp đã được tách nhỏ
- [ ] Component dài trên 50 dòng được xem xét chia lại
- [ ] Hàm dài hoặc có logic lặp lại được tách/gom lại và tái sử dụng

## UI/UX, HTML & CSS
- [ ] Giao diện đúng với thiết kế (so sánh với Figma hoặc file mẫu)
- [ ] Khoảng cách, màu sắc, font-size đúng theo guideline
- [ ] Responsive tốt trên mobile / tablet / desktop
- [ ] Dùng HTML semantic đúng: `section`, `main`, `button`, `label`, v.v.
- [ ] Mỗi `Image` có `alt`, mỗi `input` có `label` → đảm bảo accessibility (a11y) cơ bản
- [ ] Class đặt tên có nghĩa, rõ ràng, theo chuẩn team
  _(Tránh đặt kiểu `btn123`, `x1`, `test-div`...)_
- [ ] Không hardcode dữ liệu: text, màu sắc, URL... → dùng biến, hằng số (`constants`, `config`...)
- [ ] Nếu làm việc nhóm trong project thì mỗi pull cần **ít nhất 1 APPROVED** từ thành viên trong nhóm

## Related Tickets
- ticket redmine link

## WHAT (optional)
- Change number items `completed/total` in admin page.

## HOW
- I edit js file, inject not_vary_normal items in calculate function.

## WHY (optional)
- Because in previous version - number just depends on `normal` items. But in new version, we have `state` and `confirm_state` depends on both `normal` + `not_normal` items.

## Evidence (Screenshot or Video)


## Notes (Kiến thức tìm hiểu thêm)

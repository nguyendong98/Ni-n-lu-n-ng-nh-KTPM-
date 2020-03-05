import React from 'react';
import './Restaurant.scss';
export default function Restaurant() {
    return (
        <section className="Restaurant">
            <div className="Restaurant__banner">
                <div className="Restaurant__banner-context">
                    Restaurant
                </div>
            </div>
            <div className="Restaurant__container p-5">
                <h2 className="text-center pb-3">Nhà hàng</h2>
                <p>Nhà Hàng Spring sẽ mang đến cho bạn sự trải nghiệm ẩm thực Việt thật sự khó quên, khi thưởng thức ẩm thực hòa
                    quyện cùng vẻ đẹp của thiên nhiên và bầu không khí tươi mát đặc trưng của miền nhiệt đới. Từ giản dị đến
                    tinh tế, những món ăn được trang trí mắt mắt kích thích khẩu vị của bạn.</p>
                <p>Ẩm thực Việt Nam vốn nổi tiếng bởi sự thanh đạm nhưng vẫn giữ được nét tinh tế trong hương vị. Không những
                    vậy, các món ăn có thể làm bạn bất ngờ với những kết hợp đặc biệt giữa các nguyên liệu. Đại diện cho sự kết
                    hợp tinh tế đó phải nhắc đến các món ăn truyền thống Việt Nam. Nhờ nằm trong vùng khí hậu nhiệt đới, thảm
                    thực vật phát triển phong phú đã cung cấp cho các món ăn Việt sự lựa chọn các loại thảo mộc phong phú tốt
                    cho sức khỏe. Bên cạnh đó, những phương thức nấu ăn xưa độc đáo được truyền lại từ các thế hệ trước cũng góp
                    phần tạo nên sự đậm đà trong hương vị của từng món ăn.</p>
                <p>Hãy đến với chúng tôi để có thể thưởng thức những đặc sản mang đậm hương vị Việt! Chắc chắn bạn sẽ không thể
                    nào quên!</p>
            </div>
        </section>
    )
}

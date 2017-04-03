import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shirtColorArr: any[] = [
    { shirt_color_id: 1, shirt_color_style: '#F9F4FB', shirt_color_name: 'ขาว' },
    { shirt_color_id: 2, shirt_color_style: '#F9EDDF', shirt_color_name: 'ครีม' },
    { shirt_color_id: 4, shirt_color_style: '#A9A8A4', shirt_color_name: 'เทาท็อปดาย' },
    { shirt_color_id: 3, shirt_color_style: '#717574', shirt_color_name: 'เทาอ่อน' },
    { shirt_color_id: 5, shirt_color_style: '#433E38', shirt_color_name: 'เทาเข้ม' },
    { shirt_color_id: 6, shirt_color_style: '#010103', shirt_color_name: 'ดำ' },
    { shirt_color_id: 7, shirt_color_style: '#8BD2E6', shirt_color_name: 'ฟ้าอ่อน' },
    { shirt_color_id: 8, shirt_color_style: '#13629A', shirt_color_name: 'ฟ้าทะเล' },
    { shirt_color_id: 9, shirt_color_style: '#131D62', shirt_color_name: 'น้ำเงิน' },
    { shirt_color_id: 10, shirt_color_style: '#090E2B', shirt_color_name: 'กรมท่า' },
    { shirt_color_id: 11, shirt_color_style: '#FBE05B', shirt_color_name: 'เหลือง' },
    { shirt_color_id: 12, shirt_color_style: '#E74629', shirt_color_name: 'ส้ม' },
    { shirt_color_id: 13, shirt_color_style: '#FD757F', shirt_color_name: 'โอลด์โรส' },
    { shirt_color_id: 14, shirt_color_style: '#D71D20', shirt_color_name: 'แดง' },
    { shirt_color_id: 15, shirt_color_style: '#860D14', shirt_color_name: 'เลือดหมู' },
    { shirt_color_id: 16, shirt_color_style: '#261712', shirt_color_name: 'น้ำตาล' },
    { shirt_color_id: 17, shirt_color_style: '#F996C4', shirt_color_name: 'ชมพูอ่อน' },
    { shirt_color_id: 18, shirt_color_style: '#F0607B', shirt_color_name: 'ชมพู Sweety' },
    { shirt_color_id: 19, shirt_color_style: '#F64A7C', shirt_color_name: 'ชมพู Pinky' },
    { shirt_color_id: 20, shirt_color_style: '#CB2146', shirt_color_name: 'ชมพูบานเย็น' },
    { shirt_color_id: 21, shirt_color_style: '#A5D241', shirt_color_name: 'เขียวมะนาว' },
    { shirt_color_id: 22, shirt_color_style: '#4CA99E', shirt_color_name: 'เขียวมิ้นต์' },
    { shirt_color_id: 23, shirt_color_style: '#227733', shirt_color_name: 'เขียวใบไม้' },
    { shirt_color_id: 24, shirt_color_style: '#33351D', shirt_color_name: 'เขียวขี้ม้า' },
    { shirt_color_id: 25, shirt_color_style: '#0A6465', shirt_color_name: 'เขียวหยก' },
    { shirt_color_id: 26, shirt_color_style: '#796CA4', shirt_color_name: 'ม่วงอ่อน' },
    { shirt_color_id: 27, shirt_color_style: '#3C1959', shirt_color_name: 'ม่วงเข้ม' }
  ];

  constructor() {}

  ngOnInit() {
  }
}
import "./App.css";
import Contents from "../contents/index.jsx";
import React, { Component } from "react";
import { BrowserRouter, Routes, HashRouter } from "react-router-dom";
import Header from "../header";
import Category from "../category/category";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "DEVITA LIFE токений анхдагч биржийн арилжаа (IEO)-ны тухай таны мэдэх хэрэгтэй зүйлс",
          img: "https://content.ikon.mn/news/2021/11/7/asyq66_unnamed_10__x974.jpg",
          type: "Finance",
        },
        {
          name: "'Инвескор бонд”-ын хөтөлбөрийн Транч 2 эхэллээ'",
          img: "https://content.ikon.mn/news/2021/8/8/93bfzu_1_x974.jpg",
          type: "Finance",
        },
        {
          name: "Гадаад валютаар үнэ тогтоож, олон нийтэд сурталчилж байгаа хууль бус үйлдлийн мэдээллийг иргэдээс авч байна",
          img: "https://content.ikon.mn/news/2021/9/7/k597t9_MPA_PHOTO_2016-6791_x974.jpg",
          type: "Finance",
        },
        {
          name: "2018-2019 онд зарлагдаж буй гадаадын их, дээд сургуулиудын ТЭТГЭЛЭГ",
          img: "https://content.ikon.mn/news/2018/1/12/394c67_1608_special_TOTO_main_x974.jpg",
          type: "Top",
        },
        {
          name: "IELTS-д гурван сарын дотор бие даан бэлдэх ҮНЭГҮЙ материал болон ерөнхий ТӨЛӨВЛӨГӨӨ",
          img: "https://content.ikon.mn/news/2018/3/12/60576d_0_FZn3PdyAww3DvuOO__x974.jpg",
          type: "Top",
        },
        {
          name: "Ярих чадвараа сайжруулах ДОЛООН хялбар дасгал",
          img: "https://content.ikon.mn/news/2015/11/2/12964a_1_x974.jpg",
          type: "Top",
        },
        {
          name: "Монгол бахархлын өдөрт зориулсан 128 бөхийн барилдаан 12:00 цагт эхэлнэ",
          img: "https://content.ikon.mn/news/2016/12/29/5a043b_MPA_PHOTO_2016-8496_x974.jpg",
          type: "Sport",
        },
        {
          name: "Дэлхийд өрсөлдөх оюуны спортын тамирчдыг тодруулна",
          img: "https://content.ikon.mn/news/2021/11/1/qu27r3_poster1_x974.jpg",
          type: "Sport",
        },
        {
          name: "'Белград-2021' ДАШТ-д хүчээ сорих боксчид маргааш Европыг зорино",
          img: "https://content.ikon.mn/news/2021/10/15/87jy14_245968690_2129437367208081_5251681532060033359_n_x974.jpg",
          type: "Sport",
        },
        {
          name: "'HAPPY ART'-тай дэлхийн брэндүүд",
          img: "https://content.ikon.mn/news/2021/10/21/tyvn3j__1_4__x974.jpg",
          type: "Art",
        },
        {
          name: "Европын цахим кино наадам 2021 эхэллээ",
          img: "https://content.ikon.mn/news/2021/10/22/mlvhdx_1_Mo_x974.jpg",
          type: "Art",
        },
        {
          name: "Домогт хөгжимчид 'Jazz City Revival' фестивальд",
          img: "https://content.ikon.mn/news/2021/9/17/fi9gdq_1_x974.jpg",
          type: "Art",
        },
      ],
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header prop={this.state.data} />
          <Contents prop={this.state.data} />
          <div>
            <Routes path="/category" Component={Category} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

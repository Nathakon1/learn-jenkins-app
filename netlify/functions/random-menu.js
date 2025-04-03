exports.handler = async (event, context) => {
    // ตัวอย่างอาร์เรย์เมนูอาหาร
    const menus = [
      "ข้าวผัดกะเพราไก่",
      "ข้าวไข่เจียวหมูสับ",
      "ผัดไทยกุ้งสด",
      "ส้มตำปูปลาร้า",
      "ก๋วยเตี๋ยวเรือหมู",
      "ข้าวมันไก่",
      "ข้าวหมูแดง",
      "ข้าวหน้าเป็ด",
      "ก๋วยจั๊บญวน",
      "แกงเขียวหวานไก่"
    ];
  
    // สุ่ม index
    const randomIndex = Math.floor(Math.random() * menus.length);
  
    // ส่งค่ากลับในรูป JSON
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "เมนูแนะนำวันนี้คือ:",
        menu: menus[randomIndex],
      }),
    };
  };
  
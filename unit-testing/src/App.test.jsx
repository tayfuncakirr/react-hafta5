// render = Bileşeni sanal bir DOM içinde çalıştırır.
// screen = Render edilen bileşenlere erişim için kullanılır.
// firenevent = kullanıcı etkileşimlerini simüle eder. ( tıklama vs.)
// describe = Testleri gruplayarak ayırıp yazmamıyı sağlar daha düzenli yapı için kullanılabilir.
// it = it ve vreya test yazıklarak kullanılır test kodlarımızı içinde bulunduracağımız kavram.
// expect = kod bloğundan beklediğimiz çıktı veya işlem sonucu nu yazdığımız yer.

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App-count",() =>{
    it ( "başlangıcta sayac sıfır",()=>{
      render (<App/>);
      expect(screen.getByText("0")).toBeInTheDocument();
    });

    it ("Butona tıklanınca sayac artar",()=>{
        render(<App/>)
        const button = screen.getByText("Artır");

        //ilk değer sıfır olmalı
        expect(screen.getByText("0")).toBeInTheDocument();

        //butona tıkla
        fireEvent.click(button);

        //Yeni değer 1 olmalı

        expect(screen.getByText("1")).toBeInTheDocument();

    })
});
import React from "react";

const App: React.FC = () => {
  const host = document.domain;

  return (
    <div>
      <h1>QR Generator</h1>
      <p>QR コード生成</p>
      <h2>使いかた</h2>
      <p>
        以下の URL にアクセスすると好みの文字を表現した QR Code を生成します。
      </p>
      <code>
        http://{document.domain}?url=${`{好きな文字}`}
      </code>
      <p>例</p>
      <code>http://{host}?url=https://google.com</code>
      <p>取得できる QR コード</p>
      <img src="/?url=https://google.com"></img>

      <h2>嬉しいポイント</h2>
      <p>
        WEB 上で QR コードを表示したい時、わざわざ QR コード作成サイトで
        QRコードを作成する必要がなくなります。以下のように img タグで url
        を指定するだけで、QR コードが取得できます。
      </p>
      <code>
        &lt;img src={`"http://${host}?url=好きな文字`}&gt;&lt;/img&gt;
      </code>
    </div>
  );
};

export default App;

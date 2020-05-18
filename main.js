const axios = require('axios');

const data = `<posnetRequest>
<mid>6706598320</mid>
<tid>67543744</tid>
<oosRequestData>
<posnetid>28568</posnetid>
<XID>YKB_0000080603143050</XID>
<amount>5696</amount>
<currencyCode>TL</currencyCode>
<installment>04</installment>
<tranType>Sale</tranType>
<cardHolderName>Arif Dogan</cardHolderName>
<ccno>4506347027911094</ccno>
<expDate>2412</expDate>
<cvc>000</cvc>
</oosRequestData>
</posnetRequest>`;

axios
  .post(`https://setmpos.ykb.com/PosnetWebService/XML?xmldata=${data}`)
  .then(res => {
    console.log(res.data);
  });

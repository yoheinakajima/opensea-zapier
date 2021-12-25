var wallet = inputData.wallet;
var contract_address = inputData.contract_address;

var tokens = [];
const res = await fetch('https://api.opensea.io/api/v1/assets?owner='+wallet+'&asset_contract_address='+contract_address+'&order_direction=desc&offset=0&limit=50');
const json = await res.json();
json.assets.forEach(item => tokens.push(item.token_id));

return {"tokens":tokens};

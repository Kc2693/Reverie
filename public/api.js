let fetchedPinglist;

async function makeApiCall() {
  var API_KEY = ''; 
  const root = 'https://sheets.googleapis.com/v4/spreadsheets/'
  var params = {
    spreadsheetId: '1SliA25dIzo13ZqxqW33HZY8A_FQ6WhS1OBJnu7lCKyc', 
    majorDimension: 'ROWS',
    range: 'General!B:D/',  
  };
  console.log('fetching....')
  const getData = await fetch(`${root}${params.spreadsheetId}/values/${params.range}?majorDimension=${params.majorDimension}&key=${API_KEY}`)
  const response = await getData.json();

  fetchedPinglist = response.values
  return response.values
}

async function pinglistTypeHandler(type) {
  if (!fetchedPinglist) {
    console.log('test')
    fetchedPinglist = await makeApiCall();
  }
  let blah = filterPinglists(type);
  console.log(blah)
  return blah
}


function filterPinglists(type) {
  let filteredArr = []
  fetchedPinglist.forEach(entry => {
    if (entry.includes(type)) {
      filteredArr.push(entry[0])
    }
  })
  console.log(filteredArr);
  return filteredArr;
};

export { makeApiCall, pinglistTypeHandler };
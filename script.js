getAndRenderData()

memberArray = [];

function getAndRenderData() {
    const getURL = 'https://tribe.api.fdnd.nl/v1/list'
    fetch(getURL).then(response => response.json())
        .then(response => {
            console.log(response)
            response.data.forEach(member => {
                if (member.memberName === "Roel" || member.memberName === "Jorn" || member.memberName === "Kiara" || member.memberName === "Fabian" ) {
                    memberArray.push({
                        naam: member.memberName
                    });
                }
            })
        }).catch(error => document.body.insertAdjacentHTML('beforebegin', error))
}

console.log(memberArray);
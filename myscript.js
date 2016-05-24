salesRankNode = document.getElementById('SalesRank');
parentNode = salesRankNode.parentNode

newNode = parentNode.children[0].cloneNode(true)

newNode.getElementsByClassName("label")[0].innerText = "Category Percentage"
newNode.getElementsByClassName("value")[0].innerText = "10%"

parentNode.insertBefore(newNode, parentNode.rows[2])

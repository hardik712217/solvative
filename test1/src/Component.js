import React from 'react'

function Searchresults({ result }) {
    return (
        <div>

            <table >
                <tr>
                    <th>index</th>
                    <th>Place Name</th>
                    <th>flag</th>
                </tr>



                {result.map((item, index) => {

                    let url = "https://www.countryflags.io/" + item.CountryId.slice(0, 2) + "/flat/16.png"
                    console.log(url);
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.PlaceName}</td>
                            <td>
                                <img src={url} alt="No result found" />  
                                {"  "+item.CountryName}</td>
                        </tr>
                    )
                })}

            </table>


        </div>
    )
}

export default Searchresults
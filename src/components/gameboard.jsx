import React, {Component} from 'react';
import GameCell from './gamecell';
class gameboard extends Component {

    render() { 
        const {dimmensions,tiles,onCellPress} = this.props;
        const rows = [];
        let index = 0;
        for (let x = 0; x<dimmensions; x++)
        {   
            const columns = []
            for(let y=0;y<dimmensions;y++)
            {
                const tile = tiles[index];
                columns.push(
                    <td id={tile.id} width="50em" height="50em">
                            <GameCell 
                                key={tile.id}
                                value={tile.value}
                                id={this.props}
                                onCellPress={onCellPress}
                                tile = {tile}>
                            </GameCell>
                    </td>
                    )
                    index+=1;
            }
            rows.push(<tr>{columns}</tr>);
        }
        
        return( 
            <div>
                
                <table className="mx-auto mt-2" cellSpacing="0" cellPadding="0">
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default gameboard;
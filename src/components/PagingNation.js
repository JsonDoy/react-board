import React, {Component} from "react";
import PropTypes from 'prop-types';
import qs from 'qs';

const propTypes = {
    page: PropTypes.number,
    totalRow: PropTypes.number,
    pageCount: PropTypes.number,
    rowCount: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

const defaultProps = {
    page: 1,
    totalRow: 1,
    pageCount: 10,
    rowCount: 10,
    className: '',
    style: {},
};

class PagingNation extends Component{

    static getPage(page){
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            if (params.page > 0) {
                return parseInt(params.page, 0);
            }
        }

        return page;
    }

    static updateBrowserHistory(page, browserHistory) {
        console.log(page + " , " + browserHistory);
        const params = qs.parse(window.location.search.substring(1));
        params.page = page;
        browserHistory.push(`?${qs.stringify(params)}`);
    }

    constructor(props) {
        super(props);

        this.handlerFirstPageMove = this.handlerFirstPageMove.bind(this);
        this.handlerLastPageMove = this.handlerLastPageMove.bind(this);
        this.handlerPrevPageMove = this.handlerPrevPageMove.bind(this);
        this.handlerNextPageMove = this.handlerNextPageMove.bind(this);
        this.handlerPageMove = this.handlerPageMove.bind(this);

        this.handlerPageChange = this.handlerPageChange.bind(this);

        this.calculation = this.calculation.bind(this);

    }

    calculation(){
        const totalPage = Math.floor((this.props.totalRow - 1) / this.props.rowCount) + 1;
        const startPage = (Math.floor((this.props.page - 1) / this.props.pageCount) * this.props.pageCount) + 1;
        const isBtnFirst = this.props.page > 1;

        let endPage = startPage + (this.props.pageCount -1);
        if(endPage > totalPage){
            endPage = totalPage || 1;
        }

        //console.log("totalpage = " + totalPage);
        //console.log("endPage = " + endPage);

        const isBtnLast = endPage > this.props.page;

        const pageItems = (endPage - startPage) + 1;
        const nowPageGroup = Math.floor(startPage / this.props.pageCount) + 1;

        const nextPage = endPage + 1;
        const isBtnNext = nextPage < totalPage && totalPage > 1;
        const prevPage = startPage - 1;
        const isBtnPrev = prevPage > 1;

        const virtualSeq = this.props.totalRow - (this.props.rowCount * (this.props.page - 1));

        return {
            totalPage,
            startPage,
            endPage,
            pageItems,
            nowPageGroup,
            nextPage,
            prevPage,
            isBtnFirst,
            isBtnLast,
            isBtnNext,
            isBtnPrev,
            virtualSeq
        }
    }

    handlerPageChange(page, rowCount){
        this.props.onPageChange(page, rowCount);
    }

    handlerFirstPageMove(e, data){
        e.preventDefault();
        if(data.isBtnFirst) this.handlerPageChange(1, this.props.rowCount);
    }

    handlerLastPageMove(e, data){
        e.preventDefault();
        console.log(data);
        if(data.isBtnLast) this.handlerPageChange(data.totalPage, this.props.rowCount);
    }

    handlerPrevPageMove(e, data){
        e.preventDefault();
        if(data.isBtnPrev) this.handlerPageChange(data.prevPage, this.props.rowCount);
    }

    handlerNextPageMove(e, data){
        e.preventDefault();
        if(data.isBtnNext) this.handlerPageChange(data.nextPage, this.props.rowCount);
    }

    handlerPageMove(e, page , is){
        e.preventDefault();
        if(!is) this.handlerPageChange(page, this.props.rowCount);
    }

    render() {
        const data = this.calculation();
        const pages = Array(data.pageItems).fill(0).map((_, i) => {
           const num = data.startPage + i;
           const isPage = num === this.props.page;
           return(
               <li className={isPage === true ? 'active' : ''}>
                   <a href="" onClick={e => this.handlerPageMove(e, num, isPage)}>
                       {num}
                   </a>
               </li>
           )
        });

        return (
            <div className={this.props.className} style={this.props.style}>
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className={!data.isBtnFirst ? 'disabled' : ''}>
                            <a href="" onClick={e => this.handlerFirstPageMove(e, data)}>??????</a>
                        </li>
                        <li className={!data.isBtnPrev ? 'disabled' : ''}>
                            <a href="" onClick={e => this.handlerPrevPageMove(e, data)}>??????</a>
                        </li>
                        {pages}
                        <li className={!data.isBtnNext ? 'disabled' : ''}>
                            <a href="" onClick={e => this.handlerNextPageMove(e, data)}>??????</a>
                        </li>
                        <li className={!data.isBtnLast ? 'disabled' : ''}>
                            <a href="" onClick={e => this.handlerLastPageMove(e, data)}>?????????</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

PagingNation.propTypes = propTypes;

PagingNation.defaultProps = defaultProps;

export default  PagingNation;

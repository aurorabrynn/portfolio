import React, { Component } from "react";
import Wrapper from "../Wrapper";
import Header from "../Header";
import Hero from "../Hero";
import Container from "../Container"
import About from "../Pages/About";
import Work from "../Pages/Work";
import Footer from "../Footer";

class Portfolio extends Component {
    state = {
        currentPage: "About"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "About") {
            return <About />;
        } else {
            return <Work />;
        }
    };

    render() {
        return (
            <Wrapper>
                <Header currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange} />
                <Hero />
                <Container>
                    {this.renderPage()}
                </Container>
                <Footer />
            </Wrapper>
        );
    }
}

export default Portfolio;

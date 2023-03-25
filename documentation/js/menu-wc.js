'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">elivret-front documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f683baa6303023ec45199e77739933f0eafd2d4931d325ffd4daf6178d36139a36defe14e5f32c934a7e0ee81dd21b4bcf45f77ca4d84a364671a2e1a572c1e9"' : 'data-target="#xs-components-links-module-AppModule-f683baa6303023ec45199e77739933f0eafd2d4931d325ffd4daf6178d36139a36defe14e5f32c934a7e0ee81dd21b4bcf45f77ca4d84a364671a2e1a572c1e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f683baa6303023ec45199e77739933f0eafd2d4931d325ffd4daf6178d36139a36defe14e5f32c934a7e0ee81dd21b4bcf45f77ca4d84a364671a2e1a572c1e9"' :
                                            'id="xs-components-links-module-AppModule-f683baa6303023ec45199e77739933f0eafd2d4931d325ffd4daf6178d36139a36defe14e5f32c934a7e0ee81dd21b4bcf45f77ca4d84a364671a2e1a572c1e9"' }>
                                            <li class="link">
                                                <a href="components/AddLivretComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddLivretComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteConfirmationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivretComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivretComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivretsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivretsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TakeSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TakeSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserLivretComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserLivretComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserViewLivretComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserViewLivretComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewLivretComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewLivretComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LivretServiceService.html" data-type="entity-link" >LivretServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionService.html" data-type="entity-link" >QuestionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SectionService.html" data-type="entity-link" >SectionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/elivret.html" data-type="entity-link" >elivret</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
function domainType(domains: string[]): string[] {
    const domainType: string[] = [];

    for (let i = 0; i < domains.length; i++) {
        const domain = domains[i].split('.');
        console.log(domain);
        console.log(domain.length);
        const lastDomain = domain[domain.length - 1];
        console.log(lastDomain);

        if (lastDomain === 'org'){
            domainType.push('organization')
        } else if (lastDomain === 'com'){
            domainType.push('commercial')
        } else if (lastDomain === 'net'){
            domainType.push('network')
        } else if (lastDomain === 'info'){
            domainType.push('information')
        }
    }
    return domainType;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));
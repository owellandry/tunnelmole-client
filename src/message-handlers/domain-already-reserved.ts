import DomainAlreadyReserved from "../messages/domain-already-reserved";

export default function domainAlreadyReserved(message: DomainAlreadyReserved) {
    console.info(
        `The domain ${message.subdomain}.rurylox.site is already reserved by another user. Please choose a different subdomain. Falling back to a random subdomain`
    );
}

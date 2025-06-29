import DomainReservationError from "../messages/domain-reservation-error";

export default function domainReservationError(message: DomainReservationError) {
    console.info(
        `There was an error reserving the domain ${message.subdomain}.rurylox.site. Falling back to a random subdomain`
    );
}

export {
    domainReservationError
}
import React from "react";

export default function page() {
  return (
    <div className="py-20 max-w-screen-xl m-auto flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-primaryBlue">
          Mentions légales
        </h2>
        <p>
          Vous êtes actuellement connecté au site officiel de la Mairie de
          Rueil-Malmaison sise à l’adresse suivante : 13 boulevard Foch - 92501
          Rueil-Malmaison Cedex.
        </p>
        <p>
          La navigation sur tout ou partie de ce site implique de votre part
          l’acceptation de la totalité des conditions d’utilisation décrites
          ci-après.
        </p>
        <p>
          La Ville, soucieuse des droits des rueillois, notamment au regard des
          traitements automatisés, et dans une volonté de transparence avec ses
          administrés, a mis en place une politique reprenant l’ensemble de ces
          traitements, des finalités poursuivies par ces derniers ainsi que des
          moyens d’actions à la disposition des individus afin qu’ils puissent
          au mieux exercer leurs droits. 
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-primaryBlue">
          Conception, édition et hébergement
        </h2>
        <p>
          La conception et le développement a été réalisé par les élèves de
          l'école IIM Digital School. <br /> Ce site est édité par les divers
          services de la ville de Rueil-Malmaison, et hébergé par le service
          Informatique. Directeur de la publication : Patrick Ollier, Maire.
          Co-directeur de la publication : Rafik Temghari.
        </p>
        <p>
          Toute question concernant le site ou le fonctionnement de la Mairie
          peut être adressée au service Communication :
        </p>
        <ul className="list-disc list-inside">
          <li>
            par courrier adressé à la Mairie de Rueil-Malmaison, service
            Communication, 13 boulevard Foch, 92501 Rueil-Malmaison Cedex
          </li>
          <li>
            par courrier électronique à l’adresse{" "}
            <a
              href="mailto:info@mairie-rueilmalmaison.fr"
              className="text-primaryBlue"
            >
              info@mairie-rueilmalmaison.fr
            </a>
          </li>
          <li>
            par téléphone au{" "}
            <a href="tel:+33147326565" className="text-primaryBlue">
              01 47 32 65 65
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-primaryBlue">
          Protection de vos données personnelles
        </h2>
        <p>
          Ce site est déclaré à la Commission Nationale Informatique et Liberté
          (CNIL) sous la référence 778 746. Les informations personnelles que
          vous nous communiquez,
        </p>

        <ul className="list-disc list-inside">
          <li>soit par l’envoi de courrier électronique,</li>
          <li>
            soit par inscription à un service (notamment les lettres
            d’informations électroniques, contributions au forum, commande
            d’acte d’Etat Civil, ou tout autre service électronique).
          </li>
          <li>ou par tout autre moyen.</li>
        </ul>

        <p>
          sont destinées à l’usage exclusif de la Mairie de Rueil-Malmaison.
          Elles ne sont en aucun cas cédées ou vendues à des tiers à quelque fin
          que ce soit, notamment commerciale. Conformément aux articles 16 à 22
          du Règlement relatif à la protection des personnes physiques à l'égard
          du traitement des données à caractère personnel et à la libre
          circulation de ces données (RGPD), vous disposez d'un droit d'accès,
          de modification, et de suppression des données personnelles vous
          concernant. Vous disposez le droit à la limitation du traitement,
          droit à la portabilité des données et droit d'opposition au traitement
          des données. Ce droit est exercé sur demande expresse adressée au
          Directeur de la publication, par voie postale uniquement.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-primaryBlue">
          Identification des données collectées, finalités et exploitation des
          données traitées
        </h2>
        <p>
          Afin d’assurer ces engagements auprès de ses administrés, la Ville
          collecte les données nécessaires à la mise en œuvre de ses services.
        </p>
        <p>Ces données sont collectées lorsque l’administré :</p>
        <ul className="list-disc list-inside">
          <li>
            effectue une demande de renseignement sur le site de la Ville ;
          </li>
          <li>effectue une commande sur site de la Ville ;</li>
          <li>navigue sur le site de la Ville ;</li>
          <li>participe à un jeu ou un concours ;</li>
          <li>contacte les Services de la Ville ;</li>
        </ul>

        <p>
          Dans le cadre des activités de collecte mentionnées ci-avant, la Ville
          collecte les données suivantes :
        </p>
        <ul className="list-disc list-inside">
          <li>Civilité</li>
          <li>Nom</li>
          <li>Prénom(s)</li>
          <li>Adresse</li>
          <li>Numéros de téléphone</li>
          <li>Adresse de courrier électronique</li>
          <li>Catégorie socioprofessionnelle (à vérifier)</li>
          <li>
            Code interne de traitement permettant l’identification de
            l’administré
          </li>
        </ul>

        <p>
          Afin de mieux appréhender les traitements de données effectués par la
          Ville, nous vous informons que la Ville peut traiter vos données dans
          le cadre de la réalisation de traitements relatifs à la gestion des
          dossiers des administrés. Lettre d’information électronique :
        </p>
        <p>
          Si vous souhaitez vous désinscrire de la newsletter de la ville de
          Rueil-Malmaison, cliquez ici.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-primaryBlue">
          Avertissement cookies
        </h2>
        <p>
          Un cookie est un petit fichier texte envoyé à votre navigateur via le
          site Web consulté. Grâce à ce cookie, des informatio­ns sur votre
          visite sont enregistrées sur le site Web, par exemple votre ­langue de
          prédilection et d'autres paramètres. Cela peut faciliter votre visite
          suivante sur ce site et renforcer l'util­ité de ce dernier pour vous.
          Les cookies jouent un rôle important. Sans les cookies, l'utilisation
          ­du Web pourrait s­'avérer beaucoup plus frustrante.
        </p>
        <p>
          Cadre juridique applicable : l'article 32-II de la loi du 6 janvier
          1978 et l’Ordonnance n° 2011-1012 du 24 août 2011 relative aux
          communications électroniques.
        </p>
        <p>
          En mo­difiant l'article 5(3) de la directive 2­002/58/CE par
          l'adoption de la directive 2009/136/CE, le législateur européen a posé
          le pr­incipe selon lequel le stockage d'informations sur l'équipement
          d'un utilisateur ou l'accès à des informations déjà stockées, ne
          devaient être mis en œuvre qu'avec le consentement préalable de
          l'utilisateur, sauf si ces actions sont strictement nécessaires au
          fournisseur pour la délivrance d'un service expressément demandé par
          l'abonné ou l'utilisateur. L'article 32-II de la loi du 6 janvier 1978
          reprend ce principe. villederueil.fr utilise des cookies aux fins
          suivantes :
        </p>

        <ul className="list-disc list-inside">
          <li>
            Pour nous aider à reconnaître votre navigateur et pour enregistrer
            les préférences que vous avez déterminées lors de votre précédente
            visite.
          </li>
          <li>
            Pour nous aider à mesurer et étudier l'efficacité de notre contenu
            interactif en ligne, de ses caractéristiques, publicités et autres
            communications.
          </li>
          <li>
            Pour suivre les données analytiques sur le site, l'utilisation faite
            du site par les utilisateurs et pour améliorer les services et les
            contenus.
          </li>
        </ul>

        <h3 className="text-xl text-primaryBlue font-medium">
          Comment suppr­imer les cookies liés à ma navigation internet sur
          villederueil.fr ?
        </h3>
        <p>
          Vous pouvez choisir de désactiver les cookies dans votre navigateur à
          tout moment en suivant les ­instructions fournies dans les fichiers
          d'aide de votre navigateur. Vous pouvez également paramétrer vos
          cookies directement dans les réglages de votre navigateur.
        </p>
        <ul className="list-disc list-inside">
          <li>
            Google Chrome : https://support.google.com/chrome/answer/95647?hl=fr
          </li>
          <li>
            Internet Explorer
            : http://windows.microsoft.com/fr-fr/internet-explorer/delete-manage-cookies#ie=ie-11
          </li>
          <li>
            Mozilla Firefox
            : http://support.mozilla.org/fr/kb/activer-desactiver-cookies
          </li>
          <li>Safari : http://www.apple.com/fr/privacy/use-of-cookies/</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-primaryBlue">
          Droit d’auteur – copyright
        </h2>
        <p>
          L’ensemble du site, textes, images, animation, sons, vidéos, structure
          technique et éditoriale, savoir-faire, bases de données, fichiers
          téléchargeables de toute nature et de tout format, ainsi que tout
          autre élément intégré au site, sont la propriété de la Mairie de
          Rueil-Malmaison, (à l’exception des droits régis par les licences
          d’utilisation des logiciels utilisés pour la gestion du site), sauf
          mention contraire expresse. Ils sont par conséquent protégés par la
          législation française et internationale sur le droit d’auteur et la
          propriété intellectuelle. Toute reproduction, copie, représentation,
          importation de tout ou partie du site sur format électronique de toute
          nature, est formellement prohibée, sauf autorisation expresse du
          directeur de publication ou courte citation mentionnant la source. Le
          non-respect de ces dispositions constituerait un délit de contrefaçon,
          passible de sanctions pénales prévues à l’article L.335-2 du Code de
          la Propriété Intellectuelle. La reproduction sur papier est toutefois
          autorisée, dans les respects des conditions suivantes :
        </p>
        <p>
          Cadre juridique applicable : l'article 32-II de la loi du 6 janvier
          1978 et l’Ordonnance n° 2011-1012 du 24 août 2011 relative aux
          communications électroniques.
        </p>
        <p>
          En mo­difiant l'article 5(3) de la directive 2­002/58/CE par
          l'adoption de la directive 2009/136/CE, le législateur européen a posé
          le pr­incipe selon lequel le stockage d'informations sur l'équipement
          d'un utilisateur ou l'accès à des informations déjà stockées, ne
          devaient être mis en œuvre qu'avec le consentement préalable de
          l'utilisateur, sauf si ces actions sont strictement nécessaires au
          fournisseur pour la délivrance d'un service expressément demandé par
          l'abonné ou l'utilisateur. L'article 32-II de la loi du 6 janvier 1978
          reprend ce principe. villederueil.fr utilise des cookies aux fins
          suivantes :
        </p>

        <ul className="list-disc list-inside">
          <li>
            pour un usage privé ou pédagogique, excluant toute utilisation
            commerciale ou publicitaire.
          </li>
          <li>
            les informations reproduites le sont à l’identique, aucune
            altération ou modification ne doit être apportée.
          </li>
          <li>
            La source des données doit être clairement mentionnée (par exemple «
            source : site internet de la Mairie de Rueil Malmaison,
            http://www.villederueil.fr).
          </li>
        </ul>

        <p>
          Les demandes d’utilisation ou de reproduction d’éléments publiés sur
          le site (en particulier le logo de la ville et les photos) à titre
          professionnel ou associatif doivent être adressées au service
          Communication par voie postale ou courrier électronique.
        </p>

        <p>
          Crédits pour l'ensemble des photographies : © Ville de Rueil-Malmaison
          - Christophe Soresto - Paul Martinez. <br /> Crédits pour l'ensemble
          des visuels : © Ville de Rueil-Malmaison - Mariane Kanté - Emilie
          Leconte.  
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-primaryBlue">
          Modification et actualisation du site
        </h2>
        <p>
          Les documents et informations publiés sur ce site font l’objet de
          nombreux contrôles. Ils peuvent toutefois contenir des inexactitudes
          ou approximations dans leurs contenus, ou des erreurs de liens. Si
          vous en constatez, n’hésitez pas à les signaler au service
          Communication pour correction à cette adresse :
          info@mairie-rueilmalmaison.fr Ils sont ouverts à la consultation à
          titre indicatif, et sont par conséquent inopposables à la Mairie en
          cas de litige. Ils sont en outre susceptibles de modification à tout
          moment et sans préavis.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-primaryBlue">
          Gestion des liens
        </h2>
        <p>
          Tout lien vers le site internet de la Mairie de Rueil-Malmaison
          nécessite l’autorisation préalable du directeur de la publication. Les
          demandes d’autorisation sont à adresser au service Communication. Les
          sites sollicitant la création d’un lien vers celui de la Mairie sont
          vérifiés par le service communication au moment de la création du
          lien. Toutefois la Mairie de Rueil-Malmaison ne maîtrise en aucun cas
          la publication des informations, documents et fichiers ou éléments de
          toute nature qui y figurent. Par conséquent, vous visitez ces sites
          sous votre entière et totale responsabilité. La Mairie de Rueil ne
          saurait être tenue pour responsable de leurs contenus ou des dommages
          de toute nature résultant de leur consultation (notamment la
          transmission de virus informatiques). Après autorisation, le lien doit
          pointer vers l’adresse de la page d’accueil,
          http://www.villederueil.fr.
        </p>

        <p>
          La création vers une ou plusieurs pages intérieures est interdite,
          sauf dérogation expresse accordée par le Directeur de la Publication.
          Les liens créés depuis le site de la Mairie vers des sites externes le
          sont à titre indicatif. En cliquant sur l’un d’eux, vous quittez le
          site de la Maire, et vous visitez un autre site. Ces sites sont
          vérifiés par le service communication au moment de la création du
          lien. Toutefois la Mairie de Rueil-Malmaison ne maîtrise en aucun cas
          la publication des informations, documents et fichiers ou éléments de
          toute nature qui y figurent. Par conséquent, vous visitez ces sites
          sous votre entière et totale responsabilité. La Mairie de Rueil ne
          saurait être tenue pour responsable de leurs contenus ou des dommages
          de toute nature résultant de leur consultation (notamment la
          transmission de virus informatiques).
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-primaryBlue">
          Exonération de responsabilités
        </h2>
        <p>
          Il appartient à l’utilisateur de prendre toutes les dispositions
          nécessaires à une bonne navigation sur internet, notamment de se
          protéger contre la transmission de virus ou l’installation de tout
          programme informatique sur son ordinateur, à son insu ou contre sa
          volonté. La mairie de Rueil-Malmaison décline toute responsabilité
          relative à des dommages directs ou indirects causés par la navigation
          sur son site ou sur un site externe qui lui est lié. Elle ne saurait
          voir sa responsabilité engagée du fait de dysfonctionnement du réseau
          internet, d’une inaccessibilité totale ou partielle au site pour
          quelque raison que ce soit, notamment des opérations de maintenance
          technique ou de dysfonctionnements de son système informatique. Ce
          site internet est régi par le droit français.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-primaryBlue">
          Accès aux documents administratifs et des questions relatives à la
          réutilisation des informations publiques
        </h2>
        <p>
          Vu le Code général des collectivités territoriales ; vu le code des
          relations entre le public et l’administration, et notamment ses
          articles L.330-1, R.330-2 et suivants ; Madame Virginie MOULIN est
          désignée comme la personne responsable de l’accès aux documents
          administratifs et des questions relatives à la réutilisation des
          informations publiques.
        </p>
      </div>
    </div>
  );
}

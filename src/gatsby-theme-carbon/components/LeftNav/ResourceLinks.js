import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'IBM Cloud',
    href: 'https://cloud.ibm.com/',
  },
  {
    title: 'IBM Garage Method',
    href: 'https://www.ibm.com/garage/method',
  },
  {
    title: 'Attend Bootcamp remotely',
    href: 'https://cloud.ibm.com/catalog/services/consult-with-ibm-garage',
  },
  {
    title: 'Red Hat OpenShift',
    href: 'https://learn.openshift.com/',
  },
  {
    title: 'Kubernetes',
    href: 'https://kubernetes.io/',
  }

];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;

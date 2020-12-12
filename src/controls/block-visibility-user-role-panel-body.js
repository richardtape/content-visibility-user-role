import { PanelBody, PanelRow } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import { CheckboxGroupCheckbox }  from './block-visibility-role-checkbox';

function BlockVisibilityUserRolePanelBodyControl( { instanceId, props } ) {

    // Fetch the  roles from PHP
    const userRoles = BlockVisibilityUserRole.roles;

    // userRoles is an array of objects, for each registered user role.
    // Each role object looks like: {label: "Administrator", value: "administrator"}

    const id = `bv-roles-${ instanceId }`;

    return (
        <PanelBody
            title={ __( 'User Role', 'block-visibility-user-role' ) }
            initialOpen={ false }
            className="block-visibility-control-panel block-visibility-user-role-controls"
        >
            <PanelRow>
                <ul>
                {
                    userRoles.map( role => (
                        <CheckboxGroupCheckbox name={ id } id={ id } props={ props } role={ role } key={ props.clientId + role.value } />
                    ) )
                }
                </ul>
            </PanelRow>

            { props.attributes.blockVisibility && (
                <p class="user-role-help-intro block-visibility-help-text">{ __( 'Select one more more roles to whom this block will be ' + props.attributes.blockVisibility + '. If no roles are selected, this block will be ' + props.attributes.blockVisibility + ' regardless of a user\'s role.', 'block-visibility-user-role' ) }</p>
            ) }
        </PanelBody>
    );

}

export default withInstanceId( BlockVisibilityUserRolePanelBodyControl );